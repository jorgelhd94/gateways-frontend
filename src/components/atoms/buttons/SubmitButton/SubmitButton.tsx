import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react'

type SubmitButtonProps = {
    isLoading: boolean,
    isValidating?: boolean,
    children: ReactNode
}

const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <button
          className="inline-block w-max rounded-full disabled:cursor-not-allowed font-medium border border-solid cursor-pointer text-center text-base py-2 px-4 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600"
          type="submit"
          // eslint-disable-next-line prettier/prettier
          disabled={props.isLoading || props.isValidating}
        >
          {props.isLoading ? <FontAwesomeIcon icon={faSpinner} className="fa-spin" /> : props.children}
        </button>
      );
}

export default SubmitButton