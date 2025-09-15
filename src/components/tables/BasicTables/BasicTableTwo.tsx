import SearchTable from "../ComponentTable/SeachTable";
import PaginateTable from "../ComponentTable/PaginateTable";

import { 
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";


interface Product {
  id: number;
  brand: string;
  name: string;
  image: string;
  color: string;
  category: {
    name: string;
    color: "primary" | "info" | "success" | "warning";
    icon: JSX.Element;
  };
  price: string;
}

const tableData: Product[] = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 14 Pro",
    image: "https://cdn.flyonui.com/fy-assets/components/table/product-2.png",
    color: "Stealth black",
    category: {
      name: "Phone",
      color: "primary",
      icon: <span className="icon-[tabler--device-mobile]" />,
    },
    price: "$599",
  },
  {
    id: 2,
    brand: "Apple",
    name: "Watch series 7",
    image: "https://cdn.flyonui.com/fy-assets/components/table/product-1.png",
    color: "Peach",
    category: {
      name: "Watch",
      color: "info",
      icon: <span className="icon-[tabler--device-watch]" />,
    },
    price: "$999",
  },
  {
    id: 3,
    brand: "Meta",
    name: "Quest",
    image: "https://cdn.flyonui.com/fy-assets/components/table/product-19.png",
    color: "Elegant white",
    category: {
      name: "VR headset",
      color: "success",
      icon: <span className="icon-[tabler--device-vision-pro]" />,
    },
    price: "$499",
  },
  {
    id: 4,
    brand: "Apple",
    name: "Macbook Pro 16",
    image: "https://cdn.flyonui.com/fy-assets/components/table/product-5.png",
    color: "Space gray",
    category: {
      name: "Laptop",
      color: "warning",
      icon: <span className="icon-[tabler--device-laptop]" />,
    },
    price: "$1999",
  },
];

export default function BasicTableTwo() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
      <div className="p-4 flex justify-between items-center">
        <SearchTable />
      </div>
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                <input
                  type="checkbox"
                  aria-label="select all products"
                  className="checkbox checkbox-primary checkbox-sm"
                />
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Product
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Color
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="px-5 py-4 text-center">
                  <input
                    type="checkbox"
                    aria-label={`Select product ${product.name}`}
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                </TableCell>

                <TableCell className="px-4 py-3 text-start">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="bg-base-content/10 h-10 w-10 rounded-md overflow-hidden">
                        <img src={product.image} alt={`${product.name} image`} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">{product.brand}</div>
                      <div className="font-medium">{product.name}</div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="px-4 py-3 text-start text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.color}
                </TableCell>

                <TableCell className="px-4 py-3 text-start">
                  <div className="flex items-center">
                    <span
                      className={`badge badge-${product.category.color} badge-soft me-2 rounded-full p-1`}
                    >
                      {product.category.icon}
                    </span>
                    {product.category.name}
                  </div>
                </TableCell>

                <TableCell className="px-4 py-3 text-start text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.price}
                </TableCell>

                <TableCell className="px-4 py-3 text-center">
                  <button
                    className="btn btn-circle btn-text btn-sm me-2"
                    aria-label={`Edit ${product.name}`}
                  >
                    <span className="icon-[tabler--pencil] size-5"></span>
                  </button>
                  <button
                    className="btn btn-circle btn-text btn-sm me-2"
                    aria-label={`Delete ${product.name}`}
                  >
                    <span className="icon-[tabler--trash] size-5"></span>
                  </button>
                  <button
                    className="btn btn-circle btn-text btn-sm"
                    aria-label={`More actions for ${product.name}`}
                  >
                    <span className="icon-[tabler--dots-vertical] size-5"></span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4">
        <PaginateTable />
      </div>
      </div>
    </div>
  );
}
