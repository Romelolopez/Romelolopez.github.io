package OOP;
import java.util.*;

public class PersonCall {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int i = 1;
		Scanner scan = new Scanner (System.in);
		
		while (i == 1) {
		
		
		
		//PROMPT / MENU
		System.out.println("What record would you like to add today?:");
		System.out.println("1. Student");
		System.out.println("2. Employee");
		System.out.println("3. Exit");
		System.out.print("Enter choice: ");
		int choice = scan.nextInt();
		
			switch (choice) {
			case 1:
				System.out.println("Please enter student name:");
				String name = scan.next();
				
				System.out.println("Please enter student age:");
				int age = scan.nextInt();
				
				System.out.println("Please enter student gender:");
				char gender = scan.next().toUpperCase().charAt(0);
				
				while (gender != 'M' && gender != 'F' && gender != 'N')
				{
					System.out.println("Please enter m, f, or n");
					gender = scan.next().toUpperCase().charAt(0);
				}
				
				System.out.println("Please enter student major:");
				String major = scan.next();
				
				System.out.println("Please enter subject one score:");
				int score1 = scan.nextInt();
				
				System.out.println("Please enter subject two score:");
				int score2 = scan.nextInt();
				
				System.out.println("Please enter subject three score:");
				int score3 = scan.nextInt();
				
				Student stu1 = new Student(name, age, gender, major, score1, score2, score3);
				stu1.display();
				
				System.out.println("Avgerage score: " + String.format("%.2f", stu1.calculate(3)));
				stu1.ageCheck(age);
				System.out.println();
				break;
				
			case 2:
				System.out.println("Please enter employee ID:");
				int id = scan.nextInt();
				
				System.out.println("Please enter employee name:");
				String eName = scan.next();
				
				System.out.println("Please enter employee age:");
				int eAge = scan.nextInt();
				
				System.out.println("Please enter employee gender:");
				char eGender = scan.next().toUpperCase().charAt(0);
				
				while (eGender != 'M' && eGender != 'F' && eGender != 'N')
				{
					System.out.println("Please enter m, f, or n");
					eGender = scan.next().toUpperCase().charAt(0);
				}
				
				System.out.println("Please enter employee salary:");
				int eSalary = scan.nextInt();
				
				Employee emp1 = new Employee(id, eName, eAge, eGender, eSalary);
				emp1.display();
				
				System.out.println("Salary with bonus: " + String.format("%.2f", emp1.calculate(1500)));
				emp1.ageCheck(eAge);
				System.out.println();
				break;
			case 3:
				i = i + 1;
				break;
			}
		
		}
		
		scan.close();

	}

}
