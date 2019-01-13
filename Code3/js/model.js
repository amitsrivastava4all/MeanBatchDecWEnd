const salaryOperations = {
    // hra:function(){

    // }
    basicSalary : 0,
    takeSalary(basicSalary){
        this.basicSalary = basicSalary;
    },
    hra(){
        return this.basicSalary * 0.30;
    },
    da(){
        return this.basicSalary  * 0.10;

    },
    ta(){
        return this.basicSalary  * 0.20;

    },
    pf(){
        return this.basicSalary  * 0.05;

    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
    ns(){
        return this.gs() - this.tax();
    },
    tax(){
        var grossSalary = this.gs();
        if(grossSalary<300000){
            return 0;
        }
        else
        if(grossSalary>=300000 && grossSalary<500000){
            return grossSalary * 0.10;
        }
        else
        if(grossSalary>=500000 && grossSalary<900000){
            return grossSalary * 0.20;
        }
        else
        if(grossSalary>=900000){
            return grossSalary * 0.30;
        }
        return 0;
    }
}
