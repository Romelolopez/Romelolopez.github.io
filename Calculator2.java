import java.util.*;

public class Calculator2 {
	
	public static int add(int a, int b) {
		return a+b;
	}
	
	public static int subtract(int a, int b) {
		return a-b;
	}
	
	public static int multiply(int a, int b) {
		return a*b;
	}
	
	public static int divide(int a, int b) {
		return a/b;
	}
	
	static void division(int a, int b) {
		
		System.out.println(a / b);
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int i = 1;
		
		while (i==1) {
			Scanner scan = new Scanner (System.in);
			
			//PROMPT
			System.out.println("Enter two numbers you would like to calculate:");
			System.out.print("Number 1:");
			int num1 = scan.nextInt();
			System.out.print("Number 2:");
			int num2 = scan.nextInt();
			
			//MENU
			System.out.println("Please enter a choice:");
			System.out.println("1. Add");
			System.out.println("2. Subtraction");
			System.out.println("3. Multiplication");
			System.out.println("4. Division");
			System.out.println("5. Exit");
			System.out.print("Enter your choice: ");
			
			int choice = scan.nextInt();
			switch(choice) {
			case 1:
				System.out.println(num1 + " + " + num2 + " = " + add(num1, num2));
				System.out.println();
				break;
			case 2:
				System.out.println(num1 + " - " + num2 + " = " + subtract(num1, num2));
				System.out.println();
				break;
			case 3:
				System.out.println(num1 + " * " + num2 + " = " + multiply(num1, num2));
				System.out.println();
				break;
			case 4:
				System.out.println(num1 + " / " + num2 + " = " + divide(num1, num2));
				System.out.println();
				break;
			case 5:
				i = i + 1;
				break;
			default:
			    System.out.println("Please pick a number 1-4");
			}
		};
		
	}

}
