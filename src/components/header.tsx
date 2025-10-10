import GithubLogo from '../../assets/github-logo.png';
import LinkedInLogo from '../../assets/linkedin-logo.png';

export const Header = () => {
    return (
        <header className="flex justify-center">
            <div className="flex flex-col">
                <div className="text-6xl m-2 font-bold">
                    <h1>Joshua Pruitt</h1>
                </div>

                <div className="flex justify-center space-x-7 m-2 text-2xl">
                    <a href='https://github.com/JoshuaPruitt'>
                        <img src={GithubLogo} width={50} height={50}></img>
                    </a>

                    <a href="https://www.linkedin.com/in/joshua-pruitt-1a494a311/">
                        <img src={LinkedInLogo} width={50} height={50}></img>
                    </a>
                </div>
            </div>
        </header>
    )
};