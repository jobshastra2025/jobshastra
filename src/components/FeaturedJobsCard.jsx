/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { FeaturedJobsCardType } from "@/utils/types";
import {nanoid} from "@reduxjs/toolkit";

  const  CARDS_DATA=[{
    company_logo:"./images/canva.png",
    employment_type:"Full Time",
    designation:"Software Engineer",
    company_name:"Canva",
    location_city:"Ontario",
    location_country:"Canada",
    job_description:"Canva is looking for Lead Engineer to help develop",
    job_type:[]
  },{
    company_logo:"./images/twitter.png",
    employment_type:"Full Time",
    designation:"Data Analyst",
    company_name:"Twitter",
    location_city:"San Diego",
    location_country:"US",
    job_description:"",
    job_type:[]
  },
  {
    company_logo:"./images/dropbox.png",
    employment_type:"Full Time",
    designation:"Brand Designer",
    company_name:"Dropbox",
    location_city:"San Fransisco",
    location_country:"US",
    job_description:"",
    job_type:[]
  },
  {
    company_logo:"./images/dropbox.png",
    employment_type:"Full Time",
    designation:"Brand Designer",
    company_name:"Dropbox",
    location_city:"San Fransisco ",
    location_country:"US",
    job_description:"",
    job_type:[]
  }] 
  

export default function FeaturedJobsCard({company_logo,employment_type,designation,company_name,location_city
  ,location_country, job_description, job_type}:FeaturedJobsCardType){
    return (<>
    { CARDS_DATA.map((item)=>{
     return ( <Card key={nanoid()}>
  <CardHeader>
    <CardTitle className="flex flex-col justify-between items-center">
      <div>{item.company_logo}</div>
      <div>{item.employment_type}</div>
      </CardTitle>
  </CardHeader>
  <CardContent>
    <div>
      <div className="flex flex-row justify-center items-start">
        <h1>{item.designation }</h1>
        
      </div>
      <p></p>
    </div>
    
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>)})}</>);
}
