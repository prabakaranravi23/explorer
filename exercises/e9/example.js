let profiledetails = ["Prabakaran","prabakaranaug93@gmail.com","9629431707"]
const education_info = ["MRR.MAVMM Mat,Hr,Sec,School","12th Standard","87.50%"]
const education_info1 = ["Thiagarajar College","B.C.A.,","66%"]
const education_info2 = ["Panimalar Engineering College","M.B.A.,","75%"]
const work_exp = ["Mycon marketing LLP,Dubai","1 year","Relationship Officer"]
const work_exp1 = ["Star Digital Media LLP,Chennai","2 years","Business Development Executive"]
const work_exp2 = ["SJR Enterpraises,Madurai","2 years","Business Development Manager"]
const interestdetails = ["Playing Cricket","Hearing Music","swimming","Long Drive"]
const personal_information =["sex","male"]
const personal_information1 =["passport_no","l8783957"]
const personal_information2 =["nationality","indian"]
const personal_information3 =["date_of_birth","23.08.1993"]
const personal_information4 =["marital_status","single"]
const personal_information5 =["address","48,north masi street,madurai"]

function start(){
profiledetails1();

document.getElementById("objective").innerHTML = "To learn and function effectively in an organization where i would be able to utilize my capabilities to deliver the bottom line and in the process add value to the organization and my career"

educationdetails1();
educationdetails2();
educationdetails3();

experiencedetails();
experiencedetails1();
experiencedetails2();

interestdetails1();

personalinformation();
personalinformation1();
personalinformation2();
personalinformation3();
personalinformation4();
personalinformation5();
}

function profiledetails1(){
const profile_detailsu1 = document.getElementById("profile_details")
profiledetails.forEach(function(profile_info){
const liu1 = document.createElement("li")
liu1.textContent = profile_info
profile_detailsu1.appendChild(liu1);
})
}

function educationdetails1(){
const education_details = document.getElementById("std-12")
education_info.forEach(function(educationinfo){
const td1 = document.createElement("TD")
td1.textContent = educationinfo
education_details.appendChild(td1);
})
}

function educationdetails2(){
const education_details = document.getElementById("UG-BCA")
education_info1.forEach(function(educationinfo){
const td1 = document.createElement("TD")
td1.textContent = educationinfo
education_details.appendChild(td1);
})
}

function educationdetails3(){
const education_details = document.getElementById("PG-MBA")
education_info2.forEach(function(educationinfo){
const td1 = document.createElement("TD")
td1.textContent = educationinfo
education_details.appendChild(td1);
})
}

function experiencedetails(){
const experience_details = document.getElementById("company1")
work_exp.forEach(function(experienceinfo){
const td1 = document.createElement("TD")
td1.textContent = experienceinfo
experience_details.appendChild(td1);
})
}

function experiencedetails1(){
const experience_details = document.getElementById("company2")
work_exp1.forEach(function(experienceinfo){
const td1 = document.createElement("TD")
td1.textContent = experienceinfo
experience_details.appendChild(td1);
})
}


function experiencedetails2(){
const experience_details = document.getElementById("company3")
work_exp2.forEach(function(experienceinfo){
const td1 = document.createElement("TD")
td1.textContent = experienceinfo
experience_details.appendChild(td1);
})
}

function interestdetails1(){
const interest_details = document.getElementById("interest")
interestdetails.forEach(function(interestinfo){
const li1 = document.createElement("li")
li1.textContent = interestinfo
interest.appendChild(li1);
})
}


function personalinformation(){
const personal_details = document.getElementById("per_info")
personal_information.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}


function personalinformation1(){
const personal_details = document.getElementById("per_info1")
personal_information1.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}

function personalinformation2(){
const personal_details = document.getElementById("per_info2")
personal_information2.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}

function personalinformation3(){
const personal_details = document.getElementById("per_info3")
personal_information3.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}


function personalinformation4(){
const personal_details = document.getElementById("per_info4")
personal_information4.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}


function personalinformation5(){
const personal_details = document.getElementById("per_info5")
personal_information5.forEach(function(personalinfo){
const td1 = document.createElement("TD")
td1.textContent = personalinfo
personal_details.appendChild(td1);
})
}







