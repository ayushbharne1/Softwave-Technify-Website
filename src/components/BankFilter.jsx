import { bankLogos } from "./bankLogos";

export default function BankFilter() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 pb-4 no-scrollbar animate-bank-scroll">
        {[...bankLogos, ...bankLogos].map((bank, idx) => (
          <div
            key={idx}
            className="min-w-[90px] bg-white rounded-xl shadow-sm p-3
                   flex flex-col items-center justify-center
                   hover:shadow-md transition-shadow"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="h-8 object-contain mb-2"
            />
            <span className="text-sm font-medium">{bank.name}</span>
          </div>
        ))}
      </div>
    </div>

  );
}
