import React, {Component} from 'react';



class Buttons extends Component {
    render(){
        return (
            <div className='btns'>
                <button  type='reset'  onClick = {(e)=>this.props.handleReset(e)}>Отмена</button>
                <button className='green' type='submit' onClick={(e)=>this.props.handleSubmit(e)}>Сохранить</button>
            </div>
        )
    }
}



export default Buttons;