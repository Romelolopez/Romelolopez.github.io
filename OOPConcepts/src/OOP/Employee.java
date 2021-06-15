package OOP;

class Employee extends Person{
	
	int emp_id;
	double emp_salary;
	
	Employee(int emp_id, String pName, int pAge, char pGender, double emp_salary)
	{
		
		super(pName, pAge, pGender);
		this.emp_id = emp_id;
		this.emp_salary = emp_salary;
		
	}
	
	
	public void display() {
		System.out.println("Employee ID: " + this.emp_id);
		super.display();
		System.out.println("Employee Salary: " + this.emp_salary);
	}
	
	public double calculate(int bonus)
	{
		double totalSalary = (emp_salary+bonus);
		return totalSalary;
	}
	
	public void ageCheck(int age)
	{
		if (age > 18)
		{
			System.out.println("Adult worker");
		}
		else
		{
			System.out.println("Young adult worker");
		}
	}

}