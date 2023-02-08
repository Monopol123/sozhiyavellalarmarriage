import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { HiHome } from 'react-icons/hi';

function BreadcrumbUI() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#"> <HiHome/> </Breadcrumb.Item>
      <Breadcrumb.Item active>Viewed Profiles</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbUI;