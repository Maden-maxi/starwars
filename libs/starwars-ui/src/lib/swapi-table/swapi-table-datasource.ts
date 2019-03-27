import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { HttpParams } from '@angular/common/http';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { StarwarsService } from '../starwars/starwars.service';


/**
 * Data source for the SwapiTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SwapiTableDataSource extends DataSource<any> {
  public data: any[];
  init$;
  isLoadingResults = false;
  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private starwars: StarwarsService
  ) {
    super();
  }
  private callApi(): Observable<any> {
    const params = new HttpParams({fromObject: {
      page: this.paginator.pageIndex + 1 + '',
    }});
    this.isLoadingResults = true;
    return this.starwars.getPlanets(params).pipe(
      map((data: any) => {
        this.isLoadingResults = false;
        this.paginator.length = data.count;
        return data.results;
      }),
      catchError(e => {
        this.isLoadingResults = false;
        return [];
      })
    );
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.paginator.page,
      this.callApi()
    ];

    // Set the paginator's length
    

    return merge(...dataMutations).pipe(mergeMap(() => this.callApi()));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData() {
    // const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    // return data.splice(startIndex, this.paginator.pageSize);
    return this.callApi();
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: any[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
