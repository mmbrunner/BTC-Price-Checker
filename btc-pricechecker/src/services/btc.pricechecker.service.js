import http from "../http-common";
class PriceCheckDataService {
    getTop10(pc_id) {
        return http.get(`/pricecheck/${pc_id}`)
    }
    create(data) {
        return http.post(`/pricecheck`, data);
    }
}
export default new PriceCheckDataService();