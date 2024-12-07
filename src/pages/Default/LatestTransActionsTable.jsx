import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useRowSelect } from "@table-library/react-table-library/select";

import nodes from "./tableData";
import { IconContext } from "react-icons";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

const Component = () => {
  const data = { nodes };

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
        height: 100%;
      `,
      Row: `
        font-size: 0.8rem;
      `,
      HeaderRow: `
        font-size: 0.8rem;
        background-color: #EFF2F7;
      `,
    },
  ]);

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
  }

  const COLUMNS = [
    { label: "Order ID", renderCell: (item) => `#${item.id}`, select: true },
    { label: "Billing name", renderCell: (item) => item.BillingName },
    {
      label: "Date",
      renderCell: (item) =>
        item.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
    },
    {
      label: "Total",
      renderCell: (item) => `$${item.total}`,
    },
    {
      label: "Payment status", renderCell: (item) => {
        if (item.paymentStatus === 'chargeback') {
          return <p className="rounded-md bg-red-100 text-red-500 inline p-1 text-xs">Charge back</p>
        }
        if (item.paymentStatus === 'paid') {
          return <p className="rounded bg-green-100 text-green-500 inline p-1 text-xs">Paid</p>
        }
        if (item.paymentStatus === 'refund') {
          return <p className="rounded bg-yellow-100 text-yellow-500 inline p-1 text-xs">Refund</p>
        }
        else {
          return <p clasname="text-xs">No Data</p>
        }
      }
    },
    {
      label: "Payment Method", renderCell: (item) => {
        if(item.paymentMethod === 'visa'){
          return <div className="flex items-center gap-2">
            <IconContext.Provider value={{ size:'15px' }}>
              <FaCcVisa />
            </IconContext.Provider>
            <p className="text-sm text-neutral-800">Visa</p>
          </div>
        }
        if(item.paymentMethod === 'paypal'){
          return <div className="flex items-center gap-2">
            <IconContext.Provider value={{ size:'15px' }}>
              <FaCcPaypal />
            </IconContext.Provider>
            <p className="text-sm text-neutral-800">PayPal</p>
          </div>
        }
        if(item.paymentMethod === 'mastercard'){
          return <div className="flex items-center gap-2">
            <IconContext.Provider value={{ size:'15px' }}>
              <FaCcMastercard />
            </IconContext.Provider>
            <p className="text-sm text-neutral-800">Mastercard</p>
          </div>
        }
      }
    },
    {
      label: 'View Details', renderCell: () => <button className="px-2 py-1 rounded-full bg-blue-600 text-sm text-neutral-100" >View Details</button>
    }
  ];

  return (
    <>
      <CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
        layout={{ custom: true }}
        select={select}
      />

    </>
  );
};

export default Component;