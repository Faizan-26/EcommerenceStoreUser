'use client'
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Filter from "./Filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => { setOpen(true) }
  const onClose = () => { setOpen(false) }

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <AnimatePresence>
        {open && (
          <Dialog
            open={open}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClose={onClose}
          >
            {/* Background */}
            <div className="fixed inset-0 bg-black bg-opacity-20" onClick={onClose} />
            {/* Dialog position */}
            <motion.div
              className="fixed inset-y-0 right-0 flex"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Button */}
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>
                {/* Render the filters here */}
                <div className="p-4">
                  <Filter
                    valueKey='sizeId'
                    name="Sizes"
                    data={sizes}
                  />
                  <Filter
                    valueKey='colorId'
                    name="Colors"
                    data={colors}
                  />
                </div>
              </motion.div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileFilters;
