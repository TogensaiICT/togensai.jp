import type {IntRange} from 'type-fest';

export * from "./data";

type TogenTime = [IntRange<9, 16>, IntRange<0, 60>]

type Room = "Arena" | "Stage" | "Musicroom"

export type StageProject = {
    name: string,
    description: string,
    first: [TogenTime, TogenTime, Room] | null,
    second: [TogenTime, TogenTime, Room] | null
}

export * from './tt'