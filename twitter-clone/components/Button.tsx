// 구성 요소를 위한 인터페이스
interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label, 
    secondary, 
    fullWidth, 
    onClick, 
    large, 
    disabled, 
    outline 
}) => {
    return (
        <div>
            {label}
        </div>
    );
}

export default Button;