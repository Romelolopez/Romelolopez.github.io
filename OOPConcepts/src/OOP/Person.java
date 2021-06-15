package OOP;

class Person {
	String pName;
	int pAge;
	char pGender;
	static int count = 0;
	
	public Person() {
		
	}
	
	public Person(String name, int age, char gender) {
		pName = name;
		pAge = age;
		pGender = gender;
		count++;
	}
	
	public void display() {
		System.out.println("Name: " + this.pName);
		System.out.println("Gender: " + this.pGender);
		System.out.println("Age: " + this.pAge);	
	}
	
	public static void totalPerson() {
		System.out.println("Total person object are: " + count);
	}
}