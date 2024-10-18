export default function MSASearchBar(){
    return <section className="search-section flex-between">
        <input type="text" placeholder="Search here" />
        <label><span><i className="fa fa-search" aria-hidden="true"></i></span></label>
    </section>
}