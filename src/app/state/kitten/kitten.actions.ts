import { Action } from "@ngrx/store";
import { Kitten } from "./kitten.model";

export const GET_ALL_KITTENS = '[KITTEN] Get All Kittens';
export const GET_ALL_KITTENS_SUCCESS = '[KITTEN] Get All Kittens Success';
export const GET_ALL_KITTENS_FAIL = '[KITTEN] Get All Kittens Fail';

export const GET_KITTEN = '[KITTEN] Get Kitten';
export const GET_KITTEN_SUCCESS = '[KITTEN] Get Kitten Success';
export const GET_KITTEN_FAIL = '[KITTEN] Get Kitten Fail';

//Get Kitten List
export class GetAllKittens implements Action {
    readonly type = GET_ALL_KITTENS;
}

export class GetAllKittensSuccess implements Action {
    readonly type = GET_ALL_KITTENS_SUCCESS;
    constructor(public payload: Kitten[]) { }
}

export class GetAllKittensFail implements Action {
    readonly type = GET_ALL_KITTENS_FAIL;
    constructor(public payload: any) { }
}

//Get kitten by id
export class GetKitten implements Action {
    readonly type = GET_KITTEN;
    constructor(public payload: number) { }
}

export class GetKittenSuccess implements Action {
    readonly type = GET_KITTEN_SUCCESS;
    constructor(public payload: Kitten) { }
}

export class GetKittenFail implements Action {
    readonly type = GET_KITTEN_FAIL;
    constructor(public payload: any) { }
}

export type KittenActions =
    GetAllKittens
    | GetAllKittensSuccess
    | GetAllKittensFail
    | GetKitten
    | GetKittenSuccess
    | GetKittenFail;