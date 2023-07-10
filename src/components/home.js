import Resume from './resumeinput';
import Resumeoutput from './resumeoutput';
import Tophead from "./tophead";
import { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const Home = () => {

    const data = {
        fname: '', lname: '', profile: '', aboutme: '', email: '', phonenumber: '', address: '', gitid: '', course: '', university: '', passedout: '', gpa: '',
        company: '', role: '', description: '', skill1: '', skill2: '', skill3: '', skill4: '', lang1: '', lang2: '', lang3: '', lang4: '',
    }

    const [resumedata, setResumedata] = useState(data);

    return (
        <div>
            <Tophead />
            <div className='finale'>
                <Resume resumedata={resumedata} setResumedata={setResumedata} />
                {/* <PDFDownloadLink document={<Resumeoutput resumedata={resumedata} />} fileName='resume'>
                    {({ loading }) => (loading ? <button>loading Document....</button> : <button>Download</button>)}

                </PDFDownloadLink> */}
                    <Resumeoutput resumedata={resumedata} />
                
            </div>
        </div>
    )
}

export default Home;

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
                <p>sdfghjk</p>
                <p>sdfghjk</p>
                <p>sdfghjk</p>
                <p>sdfghjk</p>
                <p>sdfghjk</p>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);