import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('2')
    
   
    return (

        <div>
            <button onClick={() => navigate('/play')}>לשחק</button>
            {(role !== 'user' && role !== 'admin') && (
                <>
                    <button onClick={() => navigate('/login')}>כניסה</button>
                    <button onClick={() => navigate('/register')}>הרשמה</button>
                </>
            )}
            {(role === 'user' || role === 'admin') && (
                <>
                    <button onClick={() => navigate('/resultAllGame')}>תוצאות כל המשחקים</button>
                    <button onClick={() => navigate('/resultGameByUser')}>לצפות בתוצאות שלי</button>
                </>
            )}

            {role === 'admin' && (
                <>
                    <button onClick={() => navigate('/createRiddle')}>צור</button>
                    <button onClick={() => navigate('/updateRiddle')}>עדכן</button>
                    <button onClick={() => navigate('/deleteRiddle')}>מחק</button>
                </>
            )}

        </div>

    )
};

export default MainMenu;

