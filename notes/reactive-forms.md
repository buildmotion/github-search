# Reactive Forms

## Pagination
Requests that return multiple items will be paginated to 30 items by default. You can specify further pages with the ?page parameter. For some resources, you can also set a custom page size up to 100 with the ?per_page parameter. Note that for technical reasons not all endpoints respect the ?per_page parameter, see events for example.

curl 'https://api.github.com/user/repos?page=2&per_page=100'
Note that page numbering is 1-based and that omitting the ?page parameter will return the first page.

https://api.github.com/search/repositories?q=buildmotion+language:typescript&sort=stars&order=desc


- 100 max page size

```ts
Request URL: https://api.github.com/search/repositories?q=angular&sort=stars&order=desc&per_page=100
Request Method: GET
Status Code: 200 OK
Remote Address: 192.30.253.116:443
Referrer Policy: no-referrer-when-downgrade
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type
Cache-Control: no-cache
Content-Encoding: gzip
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Sat, 16 Mar 2019 23:08:20 GMT
Link: 
    <https://api.github.com/search/repositories?q=angular&sort=stars&order=desc&per_page=100&page=2>; rel="next", 
    <https://api.github.com/search/repositories?q=angular&sort=stars&order=desc&per_page=100&page=10>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Status: 200 OK
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Transfer-Encoding: chunked
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-GitHub-Media-Type: github.v3
X-GitHub-Request-Id: E4BC:0249:5D904B:F06F02:5C8D81E2
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 9
X-RateLimit-Reset: 1552777758
X-XSS-Protection: 1; mode=block
Provisional headers are shown
Accept: application/json, text/plain, */*
Content-Type: application/json
Origin: http://localhost:4200
Referer: http://localhost:4200/dashboard
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
q: angular
sort: stars
order: desc
per_page: 100
```

```html
   <!-- CHARTS AND GRAPHS: START -->
        <div class="row">
            <div class="col-md-4">
                <div class="card card-chart">
                    <div class="card-header card-header-success">
                        <div class="ct-chart" id="dailySalesChart"></div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Daily Sales</h4>
                        <p class="card-category">
                            <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today
                            sales.</p>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons">access_time</i> updated 4 minutes ago
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-chart">
                    <div class="card-header card-header-warning">
                        <div class="ct-chart" id="websiteViewsChart"></div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Email Subscriptions</h4>
                        <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-chart">
                    <div class="card-header card-header-danger">
                        <div class="ct-chart" id="completedTasksChart"></div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Completed Tasks</h4>
                        <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CHARTS AND GRAPHS: START -->

        <!-- TABBED TABLE/DETAILS & EMPLOYEE STATUS: START -->
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-header card-header-tabs card-header-primary">
                        <div class="nav-tabs-navigation">
                            <div class="nav-tabs-wrapper">
                                <span class="nav-tabs-title">Tasks:</span>
                                <ul class="nav nav-tabs" data-tabs="tabs">
                                    <li class="nav-item">
                                        <a mat-button class="nav-link active" href="#profile" data-toggle="tab">
                                            <i class="material-icons">bug_report</i> Bugs
                                            <div class="ripple-container"></div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a mat-button class="nav-link" href="#messages" data-toggle="tab">
                                            <i class="material-icons">code</i> Website
                                            <div class="ripple-container"></div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a mat-button class="nav-link" href="#settings" data-toggle="tab">
                                            <i class="material-icons">cloud</i> Server
                                            <div class="ripple-container"></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="profile">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            checked>
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value="">
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value="">
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Flooded: One year later, assessing what was lost and what was found when
                                                a ravaging rain swept through metro Detroit
                                            </td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            checked>
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane" id="messages">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            checked>
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Flooded: One year later, assessing what was lost and what was found when
                                                a ravaging rain swept through metro Detroit
                                            </td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value="">
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane" id="settings">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value="">
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            checked>
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Flooded: One year later, assessing what was lost and what was found when
                                                a ravaging rain swept through metro Detroit
                                            </td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            checked>
                                                        <span class="form-check-sign">
                                                            <span class="check"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                                            <td class="td-actions text-right">
                                                <button mat-raised-button type="button" matTooltip="Edit Task"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-primary btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">edit</i>
                                                </button>
                                                <button mat-raised-button type="button" matTooltip="Remove"
                                                    [matTooltipPosition]="'above'"
                                                    class="btn btn-danger btn-link btn-sm btn-just-icon">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-header card-header-warning">
                        <h4 class="card-title">Employees Stats</h4>
                        <p class="card-category">New employees on 15th September, 2016</p>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="table table-hover">
                            <thead class="text-warning">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Country</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dakota Rice</td>
                                    <td>$36,738</td>
                                    <td>Niger</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Minerva Hooper</td>
                                    <td>$23,789</td>
                                    <td>Curaçao</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sage Rodriguez</td>
                                    <td>$56,142</td>
                                    <td>Netherlands</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Philip Chaney</td>
                                    <td>$38,735</td>
                                    <td>Korea, South</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
<!-- TABBED TABLE/DETAILS & EMPLOYEE STATUS: END -->
```