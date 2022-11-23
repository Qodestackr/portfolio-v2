// import Image from 'next/image';
import ShowwcaseImg from '../../images/logos/showwcase.svg'

const ContactButtons = ({ link, name, icon, marginLeft }) => {
    return (
        <div>
            <a
                className={`items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-neon text-neon hover:scale-110`}
                href={link}
                rel="noreferrer"
                target="_blank"
            >
                <img
                    alt={name}
                    height={25}
                    src={`${icon}`}
                    width={25}
                />
                <span className="ml-2">{name}</span>
            </a>
            <a
                className={`flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neon`}
                href={link}
                rel="noreferrer"
                target="_blank"
            >
                {/* <img
                    alt={''}
                    height={25}
                    src={ShowwcaseImg}
                    width={25}
                />
                 */}
            </a>
        </div>
    );
};

export default ContactButtons;