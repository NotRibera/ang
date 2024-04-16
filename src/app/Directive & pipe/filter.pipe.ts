import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmp'
})
export class FilterPipe implements PipeTransform {
  transform(employee: any, filterText: string): any {
    if (employee.length === 0 || filterText === '') {
      return new Promise((resolve,reject)=>{
        resolve(employee);
      });
    } else { 
      console.log(employee);
      return this.filterPromise(employee,filterText);
      // return employee.filter((employee: { name: any; }) => {
      //   return employee.name.toLowerCase() === filterText.toLowerCase()
      // })
    }
  }

  filterPromise(employee:any,filterText:string){
    let timer: any;
    // console.log(' Emp ');
    // console.log(employee);
    let filteredEmp= employee.filter((emp: { firstName: string; })=>emp.firstName.toLowerCase().includes(filterText.toLocaleLowerCase()));
    console.log('filtered Emp ');
    console.log(filteredEmp);
    return new Promise((resolve,reject)=>{
      clearTimeout(timer);
      timer =setTimeout(()=>{
        resolve(filteredEmp);
      },500)
    });
  }
}
