import { RepositorySearchResponse, Repository } from "./repository.model";

export class RepositoryResponse implements RepositorySearchResponse {
    total_count: number;    
    incomplete_results: boolean;
    items: Repository[];
}