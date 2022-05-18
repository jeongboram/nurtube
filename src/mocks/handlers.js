import { rest } from 'msw'

const todos = ['eat', 'sleep', 'play']

export const handlers = [
    //todos 목록
    rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
    }),

    //todos add
    rest.post('/todos', (req, res, ctx) => {
        todos.push(req.body);
        return res(ctx.status(201))
    })
]