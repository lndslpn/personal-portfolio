import '../index.css';
import '../App.css'; 

export default function Footer() {

  return (
    <footer className="bg-background py-6">
        <div className="container mx-auto px-6 text-center bg-background">
            <p className="text-sm text-tantxt">
            Copyright &copy; {new Date().getFullYear()} Landys Lepine. All rights reserved.
            </p>
        </div>
    </footer>
  );
}
