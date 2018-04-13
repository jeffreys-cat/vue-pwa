import axios, { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs/Observable';
import { IResult } from '../models/http.model';
import { from } from 'rxjs/observable/from';
import 'rxjs/add/operator/map';

interface IHttpRequestConfig extends AxiosRequestConfig {
    hasBaseUrl: boolean;
}
/**
 * HttpClient
 */
class HttpClient {
    baseUrl: string;
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.baseUrl = 'http://api.production.com';
        } else {
            this.baseUrl = 'http://localhost:8080';
        }
    }
    /**
     * @param url
     * @param config
     * @return Observable<IResult<any>>
     */
    get(url: string, config?: IHttpRequestConfig): Observable<IResult<any>> {
        if (config && config.hasBaseUrl) {
            return from(axios.get(this.baseUrl + url, config))
                .map(response => response.data);
        } else {
            return from(axios.get(url, config))
                .map(response => response.data);
        }
    }
    /**
     * @param url
     * @param data
     * @param config
     * @return Observable<IResult<any>>
     */
    post(url: string, data?: any, config?: IHttpRequestConfig): Observable<IResult<any>> {
        return from(axios.post(this.baseUrl + url, data, config))
                    .map(response => response.data);
    }
}
// Export A HttpClient Instance
export const http = new HttpClient();
