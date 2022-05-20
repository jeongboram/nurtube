import { rest } from "msw";
import { listPopular } from './list_popular'

//const todos = ["먹기", "자기", "놀기"];

export const handlers = [

    rest.get("/getlists", (req, res, ctx) => {
        return res(
            ctx.status(200), 
            ctx.json(listPopular)
        );
    }),

    // 할일 추가
    // rest.post("/todos", (req, res, ctx) => {
    //     todos.push(req.body);
    //     return res(ctx.status(201));
    // })
];