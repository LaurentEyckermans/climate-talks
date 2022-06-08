import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

export default function Butt({ svg,send }) {
    const arr = [`
    <svg width="18" datatitle="like" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z" stroke="currentColor" stroke-linecap="round" />
                <path d="M7 20L7 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>    
    `,
        `<svg width="18" datatitle="edit" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
        `<svg width="18" datatitle="share" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.5 6.5L8.5 10.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8.5 13.5L15.5 17.5" stroke="currentColor" stroke-width="1.5"/>
    </svg>
    
    `,
        `<svg width="18" height="18" datatitle="delete" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    `<svg width="18" height="18" datatitle="send" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9304 17.869C13.6084 18.7988 12.2931 18.798 11.9721 17.8678L10.3524 13.1739L5.78287 11.2307C4.87733 10.8456 4.96832 9.53344 5.91837 9.27705L16.1497 6.51591C16.9526 6.29922 17.6707 7.0693 17.3986 7.85518L13.9304 17.869Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>
    `

    ]

    const switchFunction = (e) => {
        switch(e.target.attributes.datatitle.value){
          case "send":
            send()
            break
          case "like":
            console.log("like")
            break
          case "edit":
            console.log("edit");
            break
          case "share":
            console.log("share");
            break
          case "delete":
            console.log("delete");
            break

        }

         if(e.target.attributes.datatitle.value==="send"){
          send()
        }
        
      }

    return (
        <div onClick={switchFunction}>{parse(arr[svg])}</div>
    )
}
