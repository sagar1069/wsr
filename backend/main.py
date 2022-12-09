from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Task
app=FastAPI()
from databse import(
    fetch_all_tasks,
    fetch_one_task,
    create_task,
    remove_task
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/allTasks")
async def get_tasks():
    response =await fetch_all_tasks()
    return response


@app.get("/task{empId}",response_model=Task)
async def get_task_by_id(empId):
    response =await fetch_one_task(empId)
    return response

@app.post("/task")
async def post_task(task:Task):
    response=await create_task(task.dict())
    if response:
        return response
    raise HTTPException(404)


@app.put("/task{empId}")
async def put_task(empId:str,task:Task):
    response=await remove_task(empId)
    response=await create_task(task.dict())
    return response


@app.delete("/task{empId}")
async def delete_task(empId):
    response=await remove_task(empId)
    if response:
        return "Sucessfully deleted"
    raise HTTPException("Something went wrong")

