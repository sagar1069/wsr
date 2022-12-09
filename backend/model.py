from pydantic import BaseModel
from datetime import date,time
class Task(BaseModel):
    empId: str
    empName: str
    empEmailAddress: str
    weekStartsfrom: str
    weekEnddate: str
    workingWith: str
    managerName: str
    task:str
    task1Time: str
    task1Remarks: str




