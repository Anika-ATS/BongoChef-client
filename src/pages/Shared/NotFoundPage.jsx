
import error from  '../../assets/NoPage/404-error-page-templates.jpg';
const NotFoundPage = () => {
    return (
        <div >
            <img src={error} alt="" />
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>

        </div>
    );
};

export default NotFoundPage;
