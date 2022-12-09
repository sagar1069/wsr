from model import Task

import motor.motor_asyncio
client =motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database=client.WSR
collection=database.table


async def fetch_one_task(empId):
    document=await collection.find_one({"empId":empId})
    return document

async def fetch_all_tasks():
    tasks=[]
    cursor=collection.find({})
    async for document in cursor:
        tasks.append(Task(**document))
    return tasks

async def create_task(task):
    document=task
    result= await collection.insert_one(document)
    return "added"


async def remove_task(empId):
    await collection.delete_one({"empId":empId})
    return True