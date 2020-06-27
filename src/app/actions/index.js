export const ROUTE_CHANGE = "CHANGE_ROUTE";

export function changeRoute(data) {
    return {
        type: ROUTE_CHANGE,
        payload: {
            route: data.route
        }
    };
}
