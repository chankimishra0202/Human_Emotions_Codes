<script>

class CreditCard { 
     constructor(number){
        this.number = number
      //  document.write(number + " is " +  
           //                 (isValid(number) ? 
           //                                            "valid" : "invalid"))
    } 
  
    // Return true if the card number is valid 
     isValid( number) 
    { 
    return (getSize(this.number) >= 13 &&  
            getSize(this.number) <= 16) &&  
            (prefixMatched(this.number, 4) ||  
            prefixMatched(this.number, 5) ||  
            prefixMatched(this.number, 37) ||  
            prefixMatched(this.number, 6)) &&  
            ((sumOfDoubleEvenPlace(this.number) +  
            sumOfOddPlace(this.number)) % 10 == 0); 
    } 
  
    // Get the result
    sumOfDoubleEvenPlace( number) 
    { 
         let sum = 0; 
         var num = number + ""; 
        for (var i = getSize(this.number) - 2; i >= 0; i -= 2)  
            sum += getDigit((num[i] + "") * 2); 
          
        return sum; 
    } 
  
    // Return this number if it is a single digit, otherwise, return the sum of the two digits 
    getDigit( number) 
    { 
        if (number < 9) 
            return number; 
        return number / 10 + number % 10; 
    } 
  
    // Return sum of odd-place digits in number 
     sumOfOddPlace(number) 
    { 
        sum = 0; 
        num = number + ""; 
        for (var i = getSize(number) - 1; i >= 0; i -= 2)  
            sum += (num[i] + "");      
        return sum; 
    } 
  
    // Return true if the digit d is a prefix for number 
    prefixMatched( number, d) 
    { 
        return getPrefix(number, getSize(d)) == d; 
    } 
  
    // Return the number of digits in d 
    getSize(d) 
    { 
        var num = d + ""; 
        return num.Length; 
    } 
  
    // Return the first k number of digits from number. If the number of digits in number 
    // is less than k, return number. 
    getPrefix(number,   k) 
    { 
        if (getSize(number) > k)  
        { 
             var num = number + ""; 
            return (num.Substring(0, k)); 
        } 
        return number; 
    } 
} 
 let user = new CreditCard(6146496758938152) 
 user.isValid()
 
 //////////////////////////////////////// Human Emotions Codes ///////////////////////////////////////
 
 class PersonalInfo{
// constructor for initialisation purpose
 static Family = "mishra"    

constructor(firstname,lastname,company,age,city,state)
{
   this.FirstName = firstname
   this.LastName = lastname
   this.CompanyName = company
   this.Age = age
   this.City = city
   this.State = state
}
  display(brotherfirstname,brothermiddlename,brotherlastname)
{
   this.BrotherFirstName = brotherfirstname
   this.BrotherMiddleName = brothermiddlename
   this.BrotherLastName = brotherlastname
   return this.BrotherLastName
}
static accessstaticdata()
{
  console.log(PersonalInfo.Family)
}
}
let stellar5 = new PersonalInfo("chanki","mishra","InTimeTec",24,"Allahabad","Uttar pradesh")
  var lname = stellar5.display("sundaram","kumar", "mishra")
   console.log(lname)
      
   PersonalInfo.accessstaticdata()
   
   ///////////////////////////////////// Human Emotions Codes /////////////////////////////////////////////
   
   function MobileInfo(totalmbdownloaded,mobiledownloadspeed,mobileuploadspeed)
{
  
  if(totalmbdownloaded > 100)
   {
     return "Exceed"
   }
   else
   {
     return "Data is left"
     }
}

let results = MobileInfo(121,30,32.06)
 console.log(results)
 
 //////////////////////////////////////// Human Emotions Codes ////////////////////////////////////////////////////
 
 let employeedetails = {
              setdata(name,designation,salary)
              {
                if(name == undefined)
                  {
                    console.log("Name Required")
                  }
                else if(designation == undefined)
                  {
                    console.log("Designation Required")
                  }
                else if(salary == undefined)
                  {
                    console.log("Provide Salary")
                  }
                else
                 {
                   this.EmployeeName = name
                   this.JobRole = designation
                   this.Salary = salary
                 }              
              },
            showemployeedetails()
            {
              console.log(this.EmployeeName,this.JobRole,this.Salary)
            }
   }
 employeedetails.setdata("chanki","Programmer",50000)
 employeedetails.showemployeedetails()
 employeedetails.setdata("chanki",undefined,24889)
 
  /////////////////////////// Human Emotions Codes /////////////////////////////////////////////////////////////////
  
  class electricitybill
 {  
   
   constructor(uname,pwd,cnumber,mode,bank,units)
   {
     this.username = uname
     this.password = pwd
     this.modeofpayment = mode
     this.bankname = bank
     this.unitsconsumed = units
     this.consumernumber = cnumber
   }
   calculatebill()
   {
       if(this.unitsconsumed < 100)
       {
         this.cost = this.unitsconsumed *1.5
       }
       else if(this.unitsconsumed > 100 && this.unitsconsumed < 300)
       {
         this.cost = 150 + ((this.unitsconsumed - 100)*2.5)
       }
       else if(this.unitsconsumed > 300 && this.unitsconsumed < 500)
       {
         this.cost = 650 + ((this.unitsconsumed - 300)*4.5)
       }
       else
       {
         this.cost = 1550 + ((this.unitsconsumed - 500)*6)
       }
   }
   showbill()
   {
    console.log("Electricity Bill To be paid" + this.cost)
   }
 }
 let terminator= new electricitybill("Chanki Mishra","chanki@ymail12",234571625,"net banking","sbi",370)
 terminator.calculatebill()
 terminator.showbill()
 
 //////////////////////////////////////////// Human Emotions Codes ///////////////////////////////////////////////////
 
 class Employeeaddressproof
{
  constructor(name,age,gen,mailid,id,idnum)
  {
    this.empname = name
    this.age = age
    this.gender = gen
    this.emailid = mailid
    this.idproof = id
    this.idproofnumber = idnum  
  }
  checkidcard() 
  {
    if(this.idproof == "voter id" || this.idproof == "ration card")
    {
      return 1
    }
    else
    {
      return 0
    }
  }
}
let madison = new Employeeaddressproof("JVT",5,"Male","info@jvtechnologies.co.in","voter id","ASUSPB560F")
  var result = madison.checkidcard();
  if(result == 1)
  {
    console.log("Your response has been submitted")
  }
  else
   {
    console.log("Provide either voter id or ration card")
   }
   
 ///////////////////////////////////////// Human Emotions Codes ////////////////////////////////////////////////
 
 class mail
{
   constructor(sname,semail,recname,recmail,day,date)
  {
    this.sendername = sname
    this.senderemailid = semail
    this.receivername = recname
    this.receiveremailid = recmail
    this.dayofmail = day
    this.dateofmail = date
  }
  checkmailid()
  {
    if(this.senderemailid == "kasi.sivap@gmail.com" && this.receiveremailid == "venkatesh.db@gmail.com")
    {
      console.log("Mail sent successfully")
    }
    else
    {
      console.log("Invalid emailid")
    }
  }
}
let dt3 = new mail("siva prasad","kasi.sivap@gmail.com","D b venkatesh","venkatesh.db@gmail.com","friday","Nov 27,2015")
    dt3.checkmailid();
let dt4 = new mail("chanki mishra","chanki@gmail.com","ashnil","ashnil@gmail.com","friday","Nov 6,2019")
    dt4.checkmailid();  
    
/////////////////////////////////// Human Emotions Codes ///////////////////////////////////////////////////////////

    class Foodbill
{ 
  constructor(order,quant,order1,quant1,order2,quant2)
  {
    this.firstorder = order
    this.firstorderquantity = quant
    this.secondorder = order1
    this.secondorderquantity = quant1
    this.thirdorder = order2
    this.thirdorderquantity = quant2

  }
   calculateprice() 
   {
      if(this.firstorder == "Butter roti")
      {
        this.Rateofbutterroti = 65
        this.butterroticost = 65 * this.firstorderquantity
      }
      if(this.secondorder == "Masala Papad")
      {
        this.Rateofmasalapapad = 75
        this.masalapapadcost = 75 * this.secondorderquantity
      }
      if(this.thirdorder == "Paneer Kadai")
      {
        this.Rateofpaneerkadai = 325
        this.paneerkadaicost = 325 * this.thirdorderquantity
      }
      this.amounttobepaid = this.butterroticost + this.masalapapadcost+this.paneerkadaicost
      this.totalquantity = this.firstorderquantity+this.secondorderquantity+this.thirdorderquantity
      this.servicecharge = 73.50
      this.VAT = 77
      this.servicetax = 36.50
      this.totalamounttobepaid = this.amounttobepaid + (this.servicetax+this.VAT+this.servicecharge)
   }
   showbill()
     {
        console.log("TotalQuantity :"+ this.totalquantity+"service tax :"+this.servicetax+"VAT :"+this.VAT+"Service charge"+this.servicecharge)
        console.log("Total Amount :" + this.totalamounttobepaid)

    }   

}

let stellar = new Foodbill("Butter roti",4,"Masala Papad",3,"Paneer Kadai",1)
stellar.calculateprice()
stellar.showbill()

/////////////////////////////////////////// Human Emotions Codes ///////////////////////////////////////////

class  Appearance{

constructor(weight,height,gender,address,personalnumber,homenumber,state,country)
{
   this.Weight = weight                  
   this.Height = height
   this.Gender = gender
   this.Address = address
   this.PersonalNumber = personalnumber
   this.Homenumber = homenumber
   this.State = state
   this.Country = country
}

}

let stellar1 = new Appearance("50kg",5,"Black","Female","Doddakannalli",8340381395,78378726357,"Karnataka","India")
let stellar2 = new Appearance("60kg",7,"Grey","Male","BTM",53663562635,7677881727388,"Karnataka","India")
console.log(stellar1.Weight)
 
 /////////////////////////////////////// Human Emotions COdes //////////////////////////////////////////
 
 class TheatreInformation{

constructor(theatrename,screen,moviename,certification,clas,pricepertkt,numberoftkt,seatnumbers,totalamount)
{
  this.TheatreName = theatrename
  this.Screen = screen
  this.MovieName = moviename
  this.MovieCertification = certification
  this.classy = clas
  this.PricePerTicket = pricepertkt
  this.NumberOfTkt = numberoftkt
  this.SeatNumbers = seatnumbers
  this.TotalAmount = totalamount
}
DisplayInformation()
{
 console.log(this.TheatreName,this.Screen,this.MovieName,this.TotalAmount)
}
DisplayGreetings()
{
  if(this.TotalAmount >500)
  { 
  return "expensive"
  }
  else
  {
   return "Good deal"
  }
}
}
let stellar3 = new TheatreInformation("PSS Multiplex","Screen 3","jvt[c,cpp]","u","first","Rs 1000",5,"c1,c2,c3,c4,c5",1050)
    stellar3.DisplayInformation()
var stellar4 = stellar3.DisplayGreetings()
console.log(stellar4)

 
 /////////////////////////// Human Emotions Codes /////////////////////////////////////////////////////////////////

let person ={
     name:"jvt",
     id:102,
     class1:["hy",1,2,3],
     person1:{
         name:"sagar",
         id:23,
         class2:["jhg", "number",1,2,"hy",45,56,76,77,"pavan","ajit",3,4,5,"shymala","chanki","yas","varshita"],
         
     },
     sum1:function(a,b){
        return a+b;
    }
}

//console.log(person.sum1(10,20));



var arr = ["jhg", "number",1,2,"hy",45,56,76,77,"vari"];
console.log(arr.length);
console.log(arr[arr.length-1])

//var len = person.person1.class2.length;
console.log(person.person1.class2[person.person1.class2.length-3]);


// function sum(a,b){
//       return a+b;
// }

// console.log(sum(2,3));

// let sum1 = function(a,b){
//     return a+b;
// }

// console.log(sum1(2,3));

// let sum2 = (a,b) => {
//     return a+b;
// }
 
// console.log(sum2(2,3)); 
let arr =[1,2,3,"hello"];
console.log(arr[3]);

let varshi = {
    name:"varshita",
    comp:"intime",
    id:20,
    getdetails(){
            this.name = "priya";
            var id =20;
            
            return id;
    },
    disp(){
      // this.name 
       console.log(this.name);
    },
    disp1(){
        // this.id
          console.log(this.id); 
    },
    fun : function(){
        var name ="pulii";
        var id =20;
        return name+id;
       // console.log(varshi.comp);
    },
    disp3(){
        console.log(varshi.name);
    }
}

console.log(varshi.name);
//varshi.getdetails().id;
varshi.getdetails();
//console.log(varshi.disp())
varshi.disp()
varshi.disp1()
console.log(varshi.fun())
varshi.disp3();

class varshit {
    name="varshita";
    comp="intime";
    id=20;
    getdetails(name){
            this.name ="manasa";
            var id =20;
            return id;
    };
    disp(){
      // this.name 
       console.log(this.name);
    };
    disp1(){
        // this.id
          console.log(this.id); 
    };
    fun=function(){
        var name ="pulii";
        var id =20;
        return name+id;
       // console.log(varshi.comp);
    };
    disp3(){
        console.log("hello");
    }
}
let varshi = new varshit();
console.log(varshi.name);
//varshi.getdetails().id;
varshi.getdetails();
//console.log(varshi.disp())
varshi.disp();
varshi.disp1();
console.log(varshi.fun());
varshi.disp3();

</script>
