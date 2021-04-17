import './App.css';
import Article from './Article';

const articles = [
  {title:"Article #1", description:"...", author:"anonymous" },
  {title:"Article #", description:"...", author:"anonymous" }
]

function App() {
  return (
    <div>
     <header>
       <div>
         <h1>Blog</h1>
       </div>
       <main>
         <h2>Tous les articles</h2>
         <section>
           {articles.map((article)=> (
             <Article key={article.title} {...article}/>
           ))}        
         </section>
       </main>
        
     </header>
    </div>
  );
}

export default App;
