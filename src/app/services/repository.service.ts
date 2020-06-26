import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import parse from 'parse-link-header';
import { Page } from '../models/page.model';
import { Repository } from '../models/repository.model';
import { Pageable } from '../models/pageable.model';
import { RepositoryFilter } from '../models/repository-filter.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private httpClient: HttpClient) { }

  getAll(repositoryFilter: RepositoryFilter, pageable: Pageable): Observable<Page<Repository>> {
    const url: string = `${environment.url}/search/repositories`;

    const params = {
      q: repositoryFilter.repositoryName,
      per_page: pageable.perPage,
      page: pageable.pageNumber
    };

    return this.httpClient.get<HttpResponse<Page<Repository>>>(url, {
      params, 
      observe: "response"
    }).pipe(
      map(httpResponse => {
        const headerLink = parse(httpResponse.headers.get("link"));
        const previousPageNumber: number = headerLink.prev != null ? headerLink.prev.page : undefined;
        const nextPageNumber: number = headerLink.next != null ? headerLink.next.page : undefined;

        return {
          total_count: httpResponse.body["total_count"],
          incomplete_results: httpResponse.body["incomplete_results"],
          items: httpResponse.body["items"],
          previousPageNumber,
          nextPageNumber
        }
      })
    );
  }
}