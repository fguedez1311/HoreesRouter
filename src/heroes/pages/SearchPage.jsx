import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import {HeroeCard} from '../components'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../helpers'

export const SearchPage = () => {

  const navigate=useNavigate()
  const location=useLocation()
  const {q = ''}=queryString.parse(location.search)
  const heroes=getHeroByName(q)
  const showSearch=q.length===0
  const showError=(q.length>0) && (heroes.length===0)
  

  const {searchText,onInputChange,onResetForm}=useForm({
    searchText:""
  })
  const onSearchSubmit=(event)=>{
      event.preventDefault();
      if (searchText.trim().length<=1) return 
      navigate(`?q=${searchText}`)
      onResetForm()
      
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
          <div className="col-5">
              <h4>Searching</h4>
              <hr/>
              <form onSubmit={onSearchSubmit}>
                <input
                  type='text'
                  placeholder='Search a Heroe'
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  value={searchText}
                  onChange={onInputChange}
                />
                <button className='btn btn-outline-primary mt-1'>
                  Search
                </button>
              
              </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr/>
            {/* {
              (q==='')
              ?
                 <div className='alert alert-primary'>Search a Heroe</div>
              :
               (heroes.length===0)&& <div className='alert alert-danger'> No Heroe with <b>{ q }</b></div>
            } */}
              
            <div className='alert alert-primary animate__animated animate__fadeInLeft' style={{display:  showSearch ? '':'none' }}>Search a Heroe</div>
            <div className='alert alert-danger animate__animated animate__fadeInLeft' style={{ display:showError ? '':'none' }}> No Heroe with <b>{ q }</b></div>
            {
              heroes.map(heroe=>
                  (<HeroeCard key={heroe.id} {...heroe}/>)
              )
            }
            
            
          </div>
      </div>
      
    </>
  )
}
