import React from "react";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "../../../../assets/icon/x-icon";
export const Catolog = ({ isOpen, setIsOpen, children }) => {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={closeModal}>
        <Transition.Child as={Fragment}>
          <Dialog.Panel>
            <div className="fixed inset-0 flex w-screen flex-col items-center justify-center bg-[#00000054]">
              <div className="relative mx-auto max-w-[70%] bg-white px-[88px] py-[52px]">
                {children}
                <div>
                  <button
                    className="absolute right-4 top-4"
                    onClick={closeModal}
                  >
                    <XIcon />
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
