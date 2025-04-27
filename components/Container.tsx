
import { cn } from '../lib/utils';
interface props{
  children: React.ReactNode;
  className?: string;
}


function Container({children,className}:props) {
  return (
      <div className={cn('max-w-screen-xl mx-auto',className)}>
          
          {children}
    </div>
  )
}

export default Container
