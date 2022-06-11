import { Snackbar } from '@mui/material';
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Clothings from '../product/Clothings';
import OpenLink from './OpenLink';
import Post from './Post';
import './chatbot.css';
// import useravatar from '../product/400banner.png';
// all available config props
const config ={
  width: "370px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
  render() {                                
    return (
        <>   
      <ChatBot 
      botAvatar='botavtar2.png'
  userAvatar='botavtar5.png'
         headerTitle="Talk With Shophy"
      recognitionEnable={true}
        steps={[
            {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hello {previousValue}, How Are You?',
                trigger:'intro-user',
              },
            // {
            //     id:'intro',
            //     message:'Hello Dear , I hope You are Doing Fine',
            //     trigger:'intro',
            // },
         
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'I am Fine', trigger:'Fine-response'},
            {value:'n', label:'I am Good', trigger:'Good-response'},
            ] 
          },
          {
            id:'Fine-response', 
            message:" That's Great!!", 
            trigger:'4'
          },
          {
            id:'Good-response', 
            message:"That's Good!!", 
            trigger:'4'
          },
          {
            id:'4', 
            message:"How Can I Help You?", 
            trigger:'5'
          },
          {
            id:'5', 
            options:[
                {value:'Shopping', label:'Shopping', trigger:'shopping-response'},
                {value:'Order', label:'Order', trigger:'Order-response'},
                {value:'Payment & Address', label:'Payment & Address', trigger:'pay-response'},
                ]  
          },
          {
            id:'pay-response',
            options:[
                {value:'payment', label:'Change method Of Payment', trigger:'chnge-pay-response'},
                {value:'Address', label:'Change Address', trigger:'chnge-add-response'},
                ]
          },
          {
            id:"chnge-pay-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/myprofile',
            text: 'Click Here ! ',
          },
            end:true
          },
          {
            id:"chnge-add-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/myprofile',
            text: 'Click Here ! ',
          },
            end:true
          
            
          },
          {
            id:'Order-response',
            options:[
                {value:'pending', label:'Pending Order', trigger:'Pending-response'},
                {value:'deliver', label:'Delivered Order', trigger:'deliver-response'},
                ] 
          },
          {
              id:"Pending-response",
              asMessage:true,
              component:<OpenLink/>,
              metadata: {
              link: 'http://shopetc.ashokinfotech.in/cart',
              text: 'Click Here ! ',
            },
              end:true
              
          },
          
          {
            id:"deliver-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/cart',
            text: 'Click Here ! ',
          },
            end:true
            
        },
          {
            id:'shopping-response',
            options:[
                {value:'Cloth', label:'Clothing', trigger:'cloth-response'},
                {value:'Accesesories', label:'Accesories', trigger:'Acc-response'},
                {value:'Footwear', label:'Footwear', trigger:'Foot-response'},
                {value:'Electronic', label:'Electronic', trigger:'elc-response'},

                ] 
          },
          {
            id:"cloth-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/category/clothing',
            text: 'Click Here ! ',
          },
            end:true
            
        },
        {
            id:"Acc-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/category/acces',
            text: 'Click Here !',
            },
            end:true
            
        },
        {
            id:"Foot-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/shoes',
            text: 'Click Here ! ',
            },
            end:true
            
        },
        {
            id:"elc-response",
            asMessage:true,
            component:<OpenLink/>,
            metadata: {
            link: 'http://shopetc.ashokinfotech.in/category/electric',
            text: 'Click Here ! ',
            },
            end:true
            
        },
        ]}
        {...config}
      />
        </>

        );
      }

    }

    export default SimpleForm;