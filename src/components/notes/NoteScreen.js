import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    return (
        <div className="notes_main-content">
            
        <NotesAppBar/>

            <div className="notes_content">

                <input 
                    type="text"
                    placeholder="some awesome title"  
                    className="notes_title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="wha happen today?"
                    className="notes_textarea"
                ></textarea>
            </div>

            <div className="notes_img">
                <img
                    src="https://as01.epimg.net/us/imagenes/2019/02/15/masdeporte/1550257246_998506_1550257592_noticia_normal.jpg"
                    alt="img"
                />
            </div>

        </div>
    );
};

export default NoteScreen;