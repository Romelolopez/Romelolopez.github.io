package OOP;

class Student extends Person implements PersonInterface{
	
	//int student_id;
	double subject1;
	double subject2;
	double subject3;
	String major;
	//double totalScore;
	
	Student(String pName, int pAge, char pGender,  String major, double subject1, 
			double subject2, double subject3)
	{
		super(pName, pAge, pGender);
		//this.student_id = student_id;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.major = major;
	}
	
	public double calculate(int totalSubjects)
	{
		double avg = ((subject1 + subject2 + subject3)/totalSubjects);
		return avg;
	}
	
	public void ageCheck(int age)
	{
		if (age > 18)
		{
			System.out.println("Adult learner");
		}
		else
		{
			System.out.println("Young adult leaner");
		}
	}
	
	public void display()
	{
		System.out.println(ORGANIZATION);
		//System.out.println("ID: " + this.student_id);
		super.display();
		System.out.println("First subject score: " + this.subject1);
		System.out.println("Second subject score: " + this.subject2);
		System.out.println("Third subject score: " + this.subject3);
		System.out.println("Major: " + this.major);
		System.out.println();
		
	}
	
}