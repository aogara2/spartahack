import Link from 'next/link';

export default function Nav() {

  return (
    
<div style={{width: "100%", minHeight: "60px",     backgroundColor:"#d2b48c", paddingLeft: "20px"}}>
          <div className='University_Toolbar'>
            <Link href={"../"} style={{color:"black"}}>
            HOME |</Link>
            </div>
            <div className='University_Toolbar'>ABOUT US | 
              </div>
            <div className='University_Toolbar'>
              <Link href={"../analysis?univ1=MSU&univ2=OSU&attr=Tuition"} style={{color:"black"}}>              COMPARE SCHOOLS | 
              </Link>
              </div>
            <div className='University_Toolbar'> 
            <Link href={"../university?univ=MSU&year=2021"} style={{color:"black"}}> 
              SEARCH SCHOOLS </Link>
            </div>   
      </div>
  )
}