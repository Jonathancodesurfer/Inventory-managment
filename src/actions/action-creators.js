import { INIT_ITEMS } from "./action-types";

export function initItemsAction(items) {
    return {
        type: INIT_ITEMS,
        payload : items
    }
}