interface ChildProps {
    color: string;

}

export const Child: React.FC<ChildProps> = ({color}) => {

    return <div>{color}
    <button>Click me</button>
    </div>
};