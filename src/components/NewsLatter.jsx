
const NewsLatter = () => {
    return (
        <div>
            {/* News Letter Section*/}
            <div className={'flex flex-col sm:flex-row justify-between gap-y-8'}>
                <div className={'flex flex-col gap-2'}>
                    <h1 className={'text-xl font-bold'}>Join Our Weekly Newsletter</h1>
                    <p className={'text-sm text-light/70'}>You will get latest update and news on your email</p>
                </div>
                <div className={'max-sm:flex max-sm:flex-col max-sm:gap-y-4'}>
                    <input type={'email'}
                           placeholder={'Enter your email address'}
                           className={'py-2 pl-4 pr-8 rounded-xl bg-[#465260]'}
                    />
                    <button className={'sm:-ml-4 bg-light rounded-xl text-primary font-bold p-2'}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;