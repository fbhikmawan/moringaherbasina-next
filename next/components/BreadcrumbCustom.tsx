'use client'

import { Breadcrumb } from 'react-bootstrap';

type BreadcrumbItem = { text: string; href?: string };

export default function BreadcrumbCustom({ breadcrumbItems }: { breadcrumbItems: BreadcrumbItem[] }) {
  return (
    <Breadcrumb className="mb-2 mb-sm-3" >
      {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <Breadcrumb.Item key={index} active={isLast} href={item.href}>
              {item.text}
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
}