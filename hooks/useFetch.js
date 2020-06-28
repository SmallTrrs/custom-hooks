import { useEffect, useState, useRef } from 'react';



export const useFetch = ( url ) => {

   const isMounted = useRef( true );
   
   const [state, setState] = useState({ data: null , loading: true, error: null  });


   useEffect(() => {
       
       return () => { isMounted.current = false }

   }, [])
    
     useEffect(() => {
        
           fetch( url )
           .then( resp => resp.json())
           .then( data => {
                
              if ( isMounted ){

                   setState({
                    
                       data,
                       error: null,
                       loading : false
     
                   });

              }              
           }) 
          .catch(
            () => {
              setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la informacion'
              });
                
            }
          );        

     }, [url]);

   return state;   


}
