import ChildComponent from './child';

export const Parent =() =>{
    return(
        <div>
            <h2>Parent</h2>
            <ChildComponent name="John" age={30} />
        </div>
    );
} 